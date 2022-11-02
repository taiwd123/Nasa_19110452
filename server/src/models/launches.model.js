const launches = new Map()

let latestFlightNumber=100

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    Customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

const getAllLaunches = () => {
    return Array.from(launches.values())
}

const addNewLaunch = (launch) => {
    latestFlightNumber++
    launches.set(latestFlightNumber, Object.assign(launch, {
        upcoming: true,
        success: true,
        Customers: ['Zero to Mastery', 'NASE'],
        flightNumber: latestFlightNumber
    }))
}

const existLaunchWithId = (launchId) => {
    return launches.has(launchId)
}

const abortLaunchByid = (launchId) => {
    const aborted = launches.get(launchId)
    aborted.upcoming = false
    aborted.success = false
    return aborted
}
module.exports = {
    getAllLaunches,
    addNewLaunch,
    existLaunchWithId,
    abortLaunchByid,
}