function trafficLight() {
  let green = 10
  let yellow = 2
  let red = 5
  const greenTimer = setInterval(() => {
    console.log(`绿灯：${green}s`)
    green--
    if (green === 0) {
      clearInterval(greenTimer)

      const yellowTimer = setInterval(() => {
        console.log(`黄灯：${yellow}s`)
        yellow--
        if (yellow === 0) {
          clearInterval(yellowTimer)

          const redTime = setInterval(() => {
            console.log(`红灯：${red}s`)
            red--
            if (red === 0) {
              clearInterval(redTime)

              trafficLight()
            }
          }, 1000)
        }
      }, 1000)
    }
  }, 1000)
}

trafficLight()