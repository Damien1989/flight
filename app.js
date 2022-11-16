const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination:"PARIS",
        flight: "AX 102",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "10:54",
        destination:"LOS ANGELES",
        flight: "LW 409",
        gate: "B 04",
        remarks: "ON TIME"
    },
    {
        time: "09:15",
        destination:"DAKAR",
        flight: "JF 30",
        gate: "D 12",
        remarks: "CANCELLED"
    },
    {
        time: "07:02",
        destination:"LILLE",
        flight: "CG 335",
        gate: "C 03",
        remarks: "ON TIME"
    },
    {
        time: "10:32",
        destination:"FRANKFURT",
        flight: "AX 878",
        gate: "A 14",
        remarks: "DELAYED"
    }
]

function populateTable() {
    for (const flight of flights){
        const tableRow = document.createElement("tr")

        for(const flightDetail in flight) {
            const  tableCell = document.createElement("td")
            console.log('flightDetail', flightDetail)
            tableCell.innerText = flight[flightDetail]
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}
populateTable()