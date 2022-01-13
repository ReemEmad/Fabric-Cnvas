import React, { useState, useEffect } from "react"

import "./App.css"
import { fabric } from "fabric"

function App() {
  const [mycanvas, setmycanvas] = useState()

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      backgroundColor: "rgb(100,100,200)",
      selectionColor: "blue",
      selectionLineWidth: 2,
    })

    setmycanvas(canvas)
  }, [])

  const ShowGrid = () => {
    var gridsize = 5
    for (var x = 1; x < mycanvas.width / gridsize; x++) {
      mycanvas.add(
        new fabric.Line([100 * x, 0, 100 * x, 600], {
          stroke: "#000000",
          strokeWidth: 1,
          selectable: false,
          strokeDashArray: [5, 5],
        }),
      )
      mycanvas.add(
        new fabric.Line([0, 100 * x, 600, 100 * x], {
          stroke: "#000000",
          strokeWidth: 1,
          selectable: false,
          strokeDashArray: [5, 5],
        }),
      )
    }
  }

  const addLine = () => {
    var line = new fabric.Line([50, 100, 200, 200], {
      left: 70,
      top: 150,
      stroke: "yellow",
    })
    mycanvas.add(line)
  }

  function regularPolygonPoints() {
    const b = prompt("Please enter one side length")
    console.log(Math.pow(b, 2))
    const a = prompt("Please enter one side length")
    const aAngle = prompt("Please enter one inner angle")

    let csquared =
      Math.pow(b, 2) + Math.pow(a, 2) - 2 * a * b * Math.cos(aAngle)
    console.log(csquared)
    const c = Math.sqrt(csquared)

    var points = [
      { x: c, y: 0 },
      { x: 0, y: b },
      { x: b, y: c },
    ]

    return points
  }

  const addTriangle = () => {
    var points = regularPolygonPoints(3, 45)
    var myPoly = new fabric.Polygon(
      points,
      {
        stroke: "red",
        left: 20,
        top: 100,
        strokeLineJoin: "bevil",
      },
      false,
    )
    mycanvas.add(myPoly)
  }
  return (
    <div className="App">
      <canvas id="canvas" width="500" height="500"></canvas>
      <br />
      <br />
      <button onClick={ShowGrid}>show grid</button>
      <button onClick={addLine}>Add a line</button>
      <button onClick={() => addTriangle(20, 30, 40, 50, 60, 70)}>
        add Triangle
      </button>
    </div>
  )
}

export default App
