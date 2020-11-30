class ClientError extends Error {
  constructor(response, request) {
    const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
      response,
      request,
    })}`;
    super(message);
    this.response = response;
    this.request = request;
  }

  static extractMessage(response) {
    if (response.error) {
      return response.error;
    }
    try {
      return response.errors && response.errors[0].message;
    } catch (e) {
      return `GraphQL Error (Code: ${response.status})`;
    }
  }
}

export class GraphQLClient {
  constructor(url, options) {
    this.url = url;
    this.options = options || {};
  }

  request(query, variables) {
    const { headers, ...others } = this.options;

    const body = JSON.stringify({
      query,
      variables: variables ? variables : undefined,
    });

    return new Promise((resolve, reject) => {
      wx.request({
        url: this.url,
        headers: Object.assign({ "Content-Type": "application/json" }, headers),
        method: "POST",
        data: body,
        success: function (response) {
          const result = response.data;
          if (
            response.statusCode >= 200 &&
            response.statusCode <= 299 &&
            !result.errors &&
            result.data
          ) {
            resolve(result.data);
          } else {
            const errorResult =
              typeof result === "string" ? { error: result } : result;
            reject(
              new ClientError(
                { ...errorResult, status: response.statusCode },
                { query, variables }
              )
            );
          }
        },
        fail: function (err) {
          reject(new ClientError({ error: err.errMsg }, { query, variables }));
        },
        ...others,
      });
    });
  }

  setHeaders(headers) {
    this.options.headers = headers;

    return this;
  }

  setHeader(key, value) {
    const { headers } = this.options;

    if (headers) {
      headers[key] = value;
    } else {
      this.options.headers = { [key]: value };
    }
    return this;
  }
}

export function request(url, query, variables) {
  const client = new GraphQLClient(url);

  return client.request(query, variables);
}

export default request;
