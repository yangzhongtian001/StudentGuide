$(function () {
    var map;
    function initMap() {
        createMap();
        setMapEvent();
        addMapControl();
        addMapOverlay();
    }
    function createMap() {
        map = new BMap.Map("map");
        map.centerAndZoom(new BMap.Point(116.262133, 39.908039), 18);
    }
    function setMapEvent() {
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
    }
    function addClickHandler(target, window) {
        target.addEventListener("click", function () {
            target.openInfoWindow(window);
        });
    }
    function addMapOverlay() {
        var markers = [
            { content: "有同学反应说我们常去的篮球场和网球场有些旧了。今天它来了！十一学校总结了大家公认需要翻新的地方，并付出以行动，给老篮球场和网球场充能。同学们现在可以放心地去挥洒青春了！在熟悉的老地方发现新的惊喜，快去探索吧！", title: "篮球场和网球场翻新", imageOffset: { width: -46, height: -21 }, position: { lat: 39.909535, lng: 116.260902 } },
            { content: "一到午饭时间，人山人海的便利店已是常态。三个结账的柜台也是排起了长龙，真是让人头大。现在十一学校新加了便利店自助支付通道。同学们有更多的选择啦！不用再为排看不见头的长队而苦恼了，快去探索吧！", title: "便利店自助支付通道", imageOffset: { width: -46, height: -21 }, position: { lat: 39.90928, lng: 116.262151 } },
            { content: "世界上有5651种语言，每一个都有它们自己的魅力，吸引着我们去探索。十一学校现在开设了多语种学习与交流中心，给每一个有学习小语种欲望的十一学子一个难得的学习机会！就在图书馆五层，快去探索吧！", title: "图书馆五层多语种学习与交流中心", imageOffset: { width: -46, height: -21 }, position: { lat: 39.90681, lng: 116.262555 } },
            { content: "“绿色”，“健康”和“低脂”慢慢成为了现代人的饮食新标准，不少十一学子也在享受这一标准带来的健康生活。现在十一学校给这些同学或想感受轻食的同学提供一个补给站，提供特制轻食餐。就在远翥楼和体育馆中间，快去探索吧！", title: "轻食餐厅", imageOffset: { width: -46, height: -21 }, position: { lat: 39.906779, lng: 116.260354 } },
            { content: "随着绿色出行的推广，更多十一学子选择骑车上学，但自行车的管理就成了一个问题。作为十一学校一个重要的出入口，北门现在新加了自行车停放区，同学们可以把车停到指定位置，使我们的北门内更整齐。就在北门，快去探索吧！", title: "北门自行车停放区", imageOffset: { width: -46, height: -21 }, position: { lat: 39.909581, lng: 116.262933 } }
        ];
        for (var index = 0; index < markers.length; index++) {
            var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
            var marker = new BMap.Marker(point, {
                icon: new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png", new BMap.Size(20, 25), {
                    imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset.height)
                })
            });
            var label = new BMap.Label(markers[index].title, { offset: new BMap.Size(25, 5) });
            var opts = {
                width: 200,
                title: markers[index].title,
                enableMessage: false
            };
            var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
            marker.setLabel(label);
            addClickHandler(marker, infoWindow);
            map.addOverlay(marker);
        };
        var labels = [
            { position: { lng: 116.261145, lat: 39.906741 }, content: "艺术楼" },
            { position: { lng: 116.262268, lat: 39.906707 }, content: "图书馆" },
            { position: { lng: 116.262331, lat: 39.908021 }, content: "容光楼" },
            { position: { lng: 116.261472, lat: 39.907425 }, content: "校史馆" },
            { position: { lng: 116.259951, lat: 39.908408 }, content: "足球场" },
            { position: { lng: 116.259951, lat: 39.908708 }, content: "网球场" },
            { position: { lng: 116.260962, lat: 39.909484 }, content: "篮球场" }
        ];
        for (var index = 0; index < labels.length; index++) {
            var opt = { position: new BMap.Point(labels[index].position.lng, labels[index].position.lat) };
            var label = new BMap.Label(labels[index].content, opt);
            label.setStyle({
                color: "#747474",
                border: "0px",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0)"
            });
            map.addOverlay(label);
        };
    }
    function addMapControl() {
        var scaleControl = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
        scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: 1 });
        map.addControl(navControl);
        var copyright = new BMap.CopyrightControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT });
        map.addControl(copyright);
        var bound = map.getBounds();
        copyright.addCopyright({ id: 1, content: "<a href='http://bndse.org/' target='_blank' style='font-size:15px;text-decoration:none;'>寰桐阁</a>", bounds: bound });
    }
    $(document).ready(function () {
        $(".container-liquid").height($(window).height() - $("#navbar-container").height());
        initMap();
    })
})