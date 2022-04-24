import React, {
  memo,
  useCallback,
  forwardRef,
  useState,
  useEffect,
} from "react";
import Icon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
  WarningOutlined,
  SettingOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routePaths, historyPush, getHistory, pathComponent } from "@/router";
import { Layout, Menu, Select } from "antd";
const { SubMenu } = Menu;
const { Option } = Select;
const { Header, Sider, Content } = Layout;
const Performance = memo(
  forwardRef((props, ref) => {
    return (
      <svg
        t="1605254552337"
        className="performance"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2577"
        width="18"
        height="18"
        fill="rgb(157, 164, 172)"
      >
        <defs>
          <style type="text/css"></style>
        </defs>
        <path
          d="M512 128c51.9 0 102.2 10.1 149.5 30.2 45.7 19.3 86.8 47 122.1 82.3s63 76.4 82.3 122.1c20 47.3 30.2 97.6 30.2 149.5S886 614.3 865.9 661.6c-19.3 45.7-47 86.8-82.3 122.1s-76.4 63-122.1 82.3c-47.3 20-97.6 30.2-149.5 30.2S409.8 886.1 362.5 866c-45.7-19.3-86.8-47-122.1-82.3s-63-76.4-82.3-122.1c-20-47.3-30.2-97.6-30.2-149.5s10.1-102.2 30.2-149.5c19.3-45.7 47-86.8 82.3-122.1s76.4-63 122.1-82.3C409.8 138.1 460.1 128 512 128m0-64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z"
          p-id="2578"
        ></path>
        <path
          d="M254 403c14.1-33.3 34.3-63.3 60-89 25.7-25.7 55.7-45.9 89-60 34.5-14.6 71.2-22 109-22s74.5 7.4 109 22c33.3 14.1 63.3 34.3 89 60l28.3-28.3C680.4 227.8 600.4 192 512 192c-176.7 0-320 143.3-320 320h40c0-37.8 7.4-74.5 22-109zM557.3 557.2c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5S693 331 693 331 582.3 532.2 557.3 557.2z"
          p-id="2579"
        ></path>
      </svg>
    );
  })
);
const PerformanceIcon = (props) => <Icon component={Performance} />;
export default memo(
  forwardRef((props, ref) => {
    const { match: { path, params: { id } = {} } = {} } = props;

    const [selectedKeys, setSelectedKeys] = useState("-1");
    /*
    menuData=[
      {name:'菜单名称',
      url:'http:xxxxx', // 路由地址
      iconComponent:<HomeOutlined/>
      children:[ // 子菜单

      ]
     }
    ]
    脚本异常
    资源下载
    网络请求
    */
    // const initMenuData = [
    //   {
    //     title: "异常与事件",
    //     url: "http:xxxxx", // 路由地址
    //     iconComponent: <WarningOutlined />,
    //     key: "1",
    //     children: [
    //       {
    //         title: "脚本异常",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <WarningOutlined/>,
    //         key: "1-1",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //       {
    //         title: "资源下载",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <WarningOutlined/>,
    //         key: "1-2",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //       {
    //         title: "网络请求",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <WarningOutlined/>,
    //         key: "1-3",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     title: "性能与访问",
    //     url: "http:xxxxx", // 路由地址
    //     iconComponent: <PerformanceIcon />,
    //     key: "2",
    //     children: [
    //       {
    //         title: "网络请求",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <HomeOutlined/>,
    //         key: "2-1",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //       {
    //         title: "资源下载",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <HomeOutlined/>,
    //         key: "2-2",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //       {
    //         title: "页面(URL)",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <HomeOutlined/>,
    //         key: "2-3",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //       {
    //         title: "页面(路由)",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <HomeOutlined/>,
    //         key: "2-4",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     title: "系统设置",
    //     url: "http:xxxxx", // 路由地址
    //     iconComponent: <SettingOutlined />,
    //     key: "2",
    //     children: [
    //       {
    //         title: "角色与权限",
    //         url: "http:xxxxx", // 路由地址
    //         // iconComponent: <HomeOutlined/>,
    //         key: "2-1",
    //         children: [
    //           // 子菜单
    //         ],
    //       },
    //       // {
    //       //   title: "资源下载",
    //       //   url: "http:xxxxx", // 路由地址
    //       //   iconComponent: <HomeOutlined/>,
    //       //   key: "2-2",
    //       //   children: [
    //       //     // 子菜单
    //       //   ],
    //       // },
    //       // {
    //       //   title: "页面(URL)",
    //       //   url: "http:xxxxx", // 路由地址
    //       //   iconComponent: <HomeOutlined/>,
    //       //   key: "2-3",
    //       //   children: [
    //       //     // 子菜单
    //       //   ],
    //       // },
    //       // {
    //       //   title: "页面(路由)",
    //       //   url: "http:xxxxx", // 路由地址
    //       //   iconComponent: <HomeOutlined/>,
    //       //   key: "2-4",
    //       //   children: [
    //       //     // 子菜单
    //       //   ],
    //       // },
    //     ],
    //   },
    //   // {
    //   //   title: "菜单名称3",
    //   //   url: "http:xxxxx", // 路由地址
    //   //   iconComponent: "HomeOutlined ",
    //   //   key: "3",
    //   //   children: [
    //   //     {
    //   //       title: "菜单名称3-1",
    //   //       url: "http:xxxxx", // 路由地址
    //   //       iconComponent: "HomeOutlined ",
    //   //       key: "3-1",
    //   //       children: [
    //   //         {
    //   //           title: "菜单名称3-1-1",
    //   //           url: "http:xxxxx", // 路由地址
    //   //           iconComponent: "HomeOutlined ",
    //   //           key: "3-1-1",
    //   //           children: [
    //   //             // 子菜单
    //   //           ],
    //   //         },
    //   //       ],
    //   //     },
    //   //     {
    //   //       title: "菜单名称3-2",
    //   //       url: "http:xxxxx", // 路由地址
    //   //       iconComponent: "HomeOutlined ",
    //   //       children: [
    //   //         {
    //   //           title: "菜单名称3-1-2",
    //   //           url: "http:xxxxx", // 路由地址
    //   //           iconComponent: <HomeOutlined/>,
    //   //           key: "3-1-2",
    //   //           children: [
    //   //             // 子菜单
    //   //           ],
    //   //         },
    //   //       ],
    //   //     },
    //   //   ],
    //   // },
    // ];
    const [menuData, setMenuData] = useState([]);
    const isProjectPage = () => {
      let reg = /^\/index\/\:id\?$/gi;
      return reg.test(path) && id;
    };
    const getMenuData = () => {
      let reg = /^\/index\/\:id\?$/gi;
      console.log("path===", path);
      // 是主页
      // if (isProjectPage()) {
      //   setMenuData([
      //     {
      //       title: "异常与事件",
      //       url: "http:xxxxx", // 路由地址
      //       iconComponent: <WarningOutlined />,
      //       key: "1",
      //       children: [
      //         {
      //           title: "脚本异常",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <WarningOutlined/>,
      //           key: "1-1",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //         {
      //           title: "资源下载",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <WarningOutlined/>,
      //           key: "1-2",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //         {
      //           title: "网络请求",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <WarningOutlined/>,
      //           key: "1-3",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       title: "性能与访问",
      //       url: "http:xxxxx", // 路由地址
      //       iconComponent: <PerformanceIcon />,
      //       key: "2",
      //       children: [
      //         {
      //           title: "网络请求",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <HomeOutlined/>,
      //           key: "2-1",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //         {
      //           title: "资源下载",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <HomeOutlined/>,
      //           key: "2-2",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //         {
      //           title: "页面(URL)",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <HomeOutlined/>,
      //           key: "2-3",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //         {
      //           title: "页面(路由)",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <HomeOutlined/>,
      //           key: "2-4",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       title: "系统设置",
      //       url: "http:xxxxx", // 路由地址
      //       iconComponent: <SettingOutlined />,
      //       key: "2",
      //       children: [
      //         {
      //           title: "角色与权限",
      //           url: "http:xxxxx", // 路由地址
      //           // iconComponent: <HomeOutlined/>,
      //           key: "2-1",
      //           children: [
      //             // 子菜单
      //           ],
      //         },
      //         // {
      //         //   title: "资源下载",
      //         //   url: "http:xxxxx", // 路由地址
      //         //   iconComponent: <HomeOutlined/>,
      //         //   key: "2-2",
      //         //   children: [
      //         //     // 子菜单
      //         //   ],
      //         // },
      //         // {
      //         //   title: "页面(URL)",
      //         //   url: "http:xxxxx", // 路由地址
      //         //   iconComponent: <HomeOutlined/>,
      //         //   key: "2-3",
      //         //   children: [
      //         //     // 子菜单
      //         //   ],
      //         // },
      //         // {
      //         //   title: "页面(路由)",
      //         //   url: "http:xxxxx", // 路由地址
      //         //   iconComponent: <HomeOutlined/>,
      //         //   key: "2-4",
      //         //   children: [
      //         //     // 子菜单
      //         //   ],
      //         // },
      //       ],
      //     },
      //     // {
      //     //   title: "菜单名称3",
      //     //   url: "http:xxxxx", // 路由地址
      //     //   iconComponent: "HomeOutlined ",
      //     //   key: "3",
      //     //   children: [
      //     //     {
      //     //       title: "菜单名称3-1",
      //     //       url: "http:xxxxx", // 路由地址
      //     //       iconComponent: "HomeOutlined ",
      //     //       key: "3-1",
      //     //       children: [
      //     //         {
      //     //           title: "菜单名称3-1-1",
      //     //           url: "http:xxxxx", // 路由地址
      //     //           iconComponent: "HomeOutlined ",
      //     //           key: "3-1-1",
      //     //           children: [
      //     //             // 子菜单
      //     //           ],
      //     //         },
      //     //       ],
      //     //     },
      //     //     {
      //     //       title: "菜单名称3-2",
      //     //       url: "http:xxxxx", // 路由地址
      //     //       iconComponent: "HomeOutlined ",
      //     //       children: [
      //     //         {
      //     //           title: "菜单名称3-1-2",
      //     //           url: "http:xxxxx", // 路由地址
      //     //           iconComponent: <HomeOutlined/>,
      //     //           key: "3-1-2",
      //     //           children: [
      //     //             // 子菜单
      //     //           ],
      //     //         },
      //     //       ],
      //     //     },
      //     //   ],
      //     // },
      //   ]);
      // } else {
        setMenuData([
          // {
          //   // title: "项目列表",
          //   // url: "/index", // 路由地址
          //   // iconComponent: <ProjectOutlined />,
          //   // key: "1",
          //   // children: [
          //   //   {
          //   //     title: "脚本异常",
          //   //     url: "http:xxxxx", // 路由地址
          //   //     // iconComponent: <WarningOutlined/>,
          //   //     key: "1-1",
          //   //     children: [
          //   //       // 子菜单
          //   //     ],
          //   //   },
          //   //   {
          //   //     title: "资源下载",
          //   //     url: "http:xxxxx", // 路由地址
          //   //     // iconComponent: <WarningOutlined/>,
          //   //     key: "1-2",
          //   //     children: [
          //   //       // 子菜单
          //   //     ],
          //   //   },
          //   //   {
          //   //     title: "网络请求",
          //   //     url: "http:xxxxx", // 路由地址
          //   //     // iconComponent: <WarningOutlined/>,
          //   //     key: "1-3",
          //   //     children: [
          //   //       // 子菜单
          //   //     ],
          //   //   },
          //   // ],
          // },
          {
            title: "设置",
            url: "http:xxxxx", // 路由地址
            iconComponent: <SettingOutlined />,
            key: "2",
            children: [
              {
                title: "个人信息",
                url: "http:xxxxx", // 路由地址
                // iconComponent: <HomeOutlined/>,
                // key: "2-1",
                children: [
                  // 子菜单
                ],
              },
              {
                title: "角色与权限",
                url: "http:xxxxx", // 路由地址
                // iconComponent: <HomeOutlined/>,
                // key: "2-1",
                children: [
                  // 子菜单
                ],
              },
              // {
              //   title: "资源下载",
              //   url: "http:xxxxx", // 路由地址
              //   iconComponent: <HomeOutlined/>,
              //   key: "2-2",
              //   children: [
              //     // 子菜单
              //   ],
              // },
              // {
              //   title: "页面(URL)",
              //   url: "http:xxxxx", // 路由地址
              //   iconComponent: <HomeOutlined/>,
              //   key: "2-3",
              //   children: [
              //     // 子菜单
              //   ],
              // },
              // {
              //   title: "页面(路由)",
              //   url: "http:xxxxx", // 路由地址
              //   iconComponent: <HomeOutlined/>,
              //   key: "2-4",
              //   children: [
              //     // 子菜单
              //   ],
              // },
            ],
          },
        ]);
        setSelectedKeys("0");
      // }
    };
    useEffect(() => {
      getMenuData();
    }, [id, path]);

    const mapIconComponent = useCallback((key) => {
      const ionComponent = {
        PieChartOutlined: <PieChartOutlined />,
        DesktopOutlined: <DesktopOutlined />,
        ContainerOutlined: <ContainerOutlined />,
        WarningOutlined: <WarningOutlined />,
        PerformanceIcon: <PerformanceIcon />,
      };
      return (key in ionComponent && ionComponent[key]) || null;
    }, []);
    const getMenu = useCallback((menuData = [], index = null) => {
      return menuData.map((item, _index) => {
        const menuKey = index == null ? _index : `${index}_${_index}`;
        console.log("menuKey=", menuKey);
        return item.children && item.children.length ? (
          <SubMenu key={menuKey} icon={item.iconComponent} title={item.title}>
            {getMenu(item.children, menuKey)}
          </SubMenu>
        ) : (
          <Menu.Item key={menuKey} icon={item.iconComponent}>
            {item.title}
          </Menu.Item>
        );
      });
    }, []);

    const onChange = useCallback((value) => {});

    const onBlur = useCallback(() => {});

    const onFocus = useCallback(() => {});

    const onSearch = useCallback((val) => {});

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKeys]}
        onSelect={(value) => {
          const { key: selectedKeys } = value;
          setSelectedKeys(selectedKeys);
        }}
        defaultSelectedKeys={[selectedKeys]}
      >
        
          {/*
        //   isProjectPage() ? (
        //   <Menu.Item key="-1" icon={<HomeOutlined />}>
        //     <Select
        //       style={{ width: "185px" }}
        //       className="menu-select"
        //       showSearch
        //       placeholder="请选择项目"
        //       optionFilterProp="children"
        //       onChange={onChange}
        //       onFocus={onFocus}
        //       onBlur={onBlur}
        //       onSearch={onSearch}
        //       filterOption={(input, option) =>
        //         option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        //       }
        //     >
        //       <Option value="jack">Jack</Option>
        //       <Option value="lucy">Lucy</Option>
        //       <Option value="tom">Tom</Option>
        //     </Select>
        //   </Menu.Item>
        // ) : null}
        */}

        {getMenu(menuData)}
      </Menu>
    );
  })
);
