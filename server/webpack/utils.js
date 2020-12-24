export const getArgv = (key) => {
  const argv = process.argv;
  const reg = new RegExp(`^${key}\\=\\w+`, "g");
  let value = null;
  for (const item of argv) {
    if (reg.test(item)) {
      value = item;
    }
  }
  value = value.split("=")[1];
  return value;
};
