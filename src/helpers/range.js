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
    for (let index = 0; index < data.length; index++) {
        const element = data[Math.floor(Math.random() * data.length)];

        new_random_element.push(element.title)
    }

    return new_random_element;
}