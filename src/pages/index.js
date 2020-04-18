import React from "react"
import moment from "moment"

const quitDate = "2019.09.24"
const quitTime = "14:00"
const quitTimeAndDate = moment(quitDate + " " + quitTime)
const pricePerPack = 4
const averageSmokesPerDay = 15
const smokesPerPack = 20

function getDays() {
  return moment().diff(quitTimeAndDate, "days")
}

function getMonthFromNow() {
  return moment(quitDate, "YYYY.MM.DD").fromNow()
}

function moneySaved() {
  return Math.round((getDays() * averageSmokesPerDay) / smokesPerPack) * pricePerPack
}

const container = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  width: "100vw"
}

const IndexPage = () => (
  <div style={container}>
    <h1 align="center">{getMonthFromNow()}</h1>
    <h1 align="center">before {getDays()} days</h1>
    <h1 align="center">{moneySaved()}$ saved </h1>
  </div>
)

export default IndexPage
