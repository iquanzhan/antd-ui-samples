# antd-use-ui
Ant Design各种组件的使用例子，掌握最常用的antd组件套路

### 一、基本环境搭建

传送门：[antd环境搭建](https://github.com/iquanzhan/antd-start-demo)

### 二、调用百度天气API

#### 2.1 添加jsonp模块

```
yarn add jsonp --save
```

#### 2.2 封装jsonp方法

```
import JsonP from 'jsonp';

export default class Axios {

    static jsonp(options) {

        return new Promise((resolve, reject) => {

            JsonP(options.url, {

                param: 'callback'

            }, function (err, response) {

                if (response.status === 'success') {

                    resolve(response);

                } else {

                    reject(response.messsage);

                }

            })

        });

    }

}

```

#### 2.3 调用百度API，获取天气数据

```
 getWeatherAPIData = () => {
        let location = "北京";

        let url = `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(location)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;

        axios.jsonp({ url }).then((res) => {
            let weather = res.results[0].weather_data[0].weather;
            let weatherPic = res.results[0].weather_data[0].dayPictureUrl;

            this.setState({
                weather, weatherPic
            })

        });
    }
```

### 三、flex布局

#### 3.1 使用flex布局

```css
form  {
  display: flex;
}
```

#### 3.2 容器的布局属性

```
1）决定item的排列方向主轴
	flex-direction: row(默认值)|row-reverse|column||column-reverse;
	默认情况下item是从左到右从上到下排列
2）决定item在主轴上的对齐方式：
	justify-content: flex-start|flex-end|center|space-between,space-around;
3）决定item在垂直于主轴的对齐方式
	align-items:flex-start|flex-end|center|baseline|stretch;
```

#### 3.3 item的布局属性

```
1）单个item的对齐方式
	align-self:属性值同align-items
```

### 四、React Router 4.0

#### 4.1 路由模块安装

```
yarn add react-router-dom --save
```

#### 4.2核心用法

4.2.1 HashRouter和BrowserRouter区别

​	HashRouter：http://www.chengxiaoxiao.com/#/home/index

​	BrowserRouter：http://www.chengxiaoxiao/home/index

HashRouter会包括一个默认的#

4.2.2 常用属性

```
Route: path,exact(完全匹配),component,render
Switch:此组件item中如果有匹配就命中。
NavLink/Link/Redirect: to 	//类似超链接，进行路由跳转,to属性为跳转的地址
```

4.2.3 最简单用法

```
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                    </ul>
                    <Route path="/" exact={true} component={Admin}></Route>
                    <Route path="/about" component={Index}></Route>
                </div>
            </HashRouter>
```

4.2.4 动态路由

```
path中配置动态参数：/about/:id

在页面获取参数：this.props.match.params.id
```

### 五、UI组件

5.1使用日期组件

​	使用日期组件需要安装moment模块：`yarn add moment --save`

