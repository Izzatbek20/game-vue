export const removeItemFromArray = (array, item) => {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(index, 1);
    }

    return array;
}

export const range = (start = 0, end) => {
    var ans = [];
    for (let i = start; i < end; i++) {
        ans.push(i);
    }
    return ans;
}

export const arrIndex = (arr) => {
    return arr[Math.floor(Math.random(3) * arr.length)]
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const makeOptions = (arrayData, current_item, index) => {
    const data = [current_item.title]
    const arrayData_clone = arrayData.map((element) => {
        return {
            ...element
        }
    })
    arrayData_clone.splice(index, 1)

    const arrayData_clone_random = shuffleArray(arrayData_clone)
    for (let index = 0; index < 1; index++) {
        const element = arrayData_clone_random[index];

        data.push(element.title)
    }

    const new_random_element = [];
    const arr_index = range(0, data.length)
    for (let index = 0; index < data.length; index++) {
        const random_int = Math.floor(Math.random() * arr_index.length);
        if (arr_index.includes(random_int) && arr_index.length > 1) {
            removeItemFromArray(arr_index, random_int)
            new_random_element.push(data[random_int])
        } else {
            new_random_element.push(data[arr_index[0]])
        }
    }

    return new_random_element;
}