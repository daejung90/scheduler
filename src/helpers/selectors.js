

export function getAppointmentsForDay(state, day) {
    const result = [];

    const dayObj = state.days.find(selectedDay => selectedDay.name === day);

    if (!dayObj) {
        return [];
    }
    for (let id of dayObj.appointments) {
        result.push(state.appointments[id])
    }
    return result;
    
}