<template>
  <div class="map-wrap" id="map-wrap">
    <div id="map"></div>
  </div>
</template>
<script>
export default {
  methods: {
    initmap() {
      const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(
          37.653302895848235,
          126.89929384702089
        ), //지도의 중심좌표.
        level: 2, //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      const markerPosition = new window.kakao.maps.LatLng(
        37.652970895848235,
        126.89919384702089
      );

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      var iwContent =
          '<div class="kakao-wrap"><span>달하민디저트</span> <div class="kakao-bottom">    <span>현대헤리엇상가 101동 148호</span> <a href="https://map.kakao.com/?itemId=964454959">길찾기</a> </div></div>',
        iwRemoveable = false; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 마커에 클릭이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, 'click', function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
      });
    },
  },
  mounted() {
    // if (window.kakao && window.kakao.maps) {
    //   this.initmap();
    // } else {
    const script = document.createElement('script');
    script.src =
      'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0b7c92a6c73aa46580d8d6f3439004c8';
    script.onload = () => window.kakao.maps.load(this.initmap);

    document.head.appendChild(script);
  },
  //   },
};
</script>

<style>
#map {
  position: relative;
  width: 512px;
  height: 40vh;
  border: 1px solid;
}
.map-wrap {
  position: relative;
  width: 512px;
  height: 40vh;
  opacity: 0;
}
.map-wrap > p {
  font-size: 24px;
  font-weight: 600;
}
.kakao-wrap {
  position: relative;
  width: 225px;
  padding: 10px;
}
.kakao-wrap > span {
  font-size: 24px;
}
.kakao-wrap > span {
  font-weight: 600;
}
.kakao-bottom > span {
  font-size: 16px;
}
.kakao-bottom {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.kakao-bottom > a {
  width: 45px;
  padding: 1px;
  margin-top: 1px;
  border: 1px solid;

  color: #21211f;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.kakao-bottom > a:hover {
  background-color: #21211f;
  color: rgb(255, 255, 255);
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
