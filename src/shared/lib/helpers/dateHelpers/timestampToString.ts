const monthRus = [
    'янв.',
    'февр.',
    'март',
    'апр.',
    'май',
    'июнь',
    'июль',
    'авг.',
    'сент.',
    'окт.',
    'нояб.',
    'дек.',
]

export function timestampToString(date: Date) {
    return `${date.getDate()} ${monthRus[Number(date.getMonth()) - 1]} ${date.getFullYear()}, ${getTime(date)}`;
}

function getTime(date: Date) {
    const minutes = date.getMinutes()
    return `${date.getHours()}:${minutes < 10 ? '0' + minutes.toString() : minutes}`
}