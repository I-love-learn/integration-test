import http from "@/utils/http"
export function coolPostStart(data, config) {
  return http({
    url: `/api/iot/device/robot/cooling/point/start`,
    method: "POST",
    data,
    headers: config.headers
  })
}

export function delRoomPerson(id) {
  return http({
    url: "http://localhost:3000/test/device/fire/control/room/duty/" + id,
    method: "delete"
  })
}
