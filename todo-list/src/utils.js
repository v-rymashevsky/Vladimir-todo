// getData


export function getData(key) {

    const value = localStorage.getItem(key) || "[]";
    return JSON.parse(value);
}

// setData

export function setData(arr) {

    const dataJson = JSON.stringify(arr);
    localStorage.setItem("todos", dataJson);

}