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
        destination:"ATLANTA",
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

const destination = ["PARIS", "ATLANTA", "DAKAR", "LILLE", "FRANKFURT"]
const remarks = ["ON TIME", "CANCELLED", "DELAYED"]
let hour = 15



function populateTable() {
    for (const flight of flights){
        const tableRow = document.createElement("tr")
        for(const flightDetail in flight) {
            const  tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for (const [index,letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)

            }


            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}
populateTable()