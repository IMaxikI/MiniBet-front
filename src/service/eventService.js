export const extractDateTime = (dateTimeStr) => {
    const [date, time] = dateTimeStr.split(' ');
    const [hour, minute] = time.split(':');
    const [year, month, day] = date.split('-');

    return (
        <>
            <div>{hour}:{minute}</div>
            <div>{day}.{month}</div>
        </>
    );
}