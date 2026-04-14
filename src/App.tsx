import { Map } from "react-kakao-maps-sdk";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        center={{ lat: 37.5665, lng: 126.978 }} // 서울 중심 좌표
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        {/* 나중에 여기에 핀(Marker)이랑 선(Polyline)을 그릴 거야 */}
      </Map>
    </div>
  );
}

export default App;
