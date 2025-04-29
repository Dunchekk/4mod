

const strRandomReplace = (str) => {

    const variable = "1234567890123456789012345678901234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-+=&?/\*^$#@$#@$#@!.()№“:;—-+=&?/\*^$#@$#@$#@!.()№“:;—-+=&?/\*^$#@$#@$#@!.()№“:;—-+=&?/\*^$#@$#@$#@!.()№“:;—";
    let random = '';
    let result = '';
    let i = 0;
    let ending = str.length;
    console.log('replase is running')

    for (i; i < ending; i += 1) {

        random = Math.floor(Math.random() * variable.length);
        result = `${variable[random]}${result}`;
        console.log('replase is fine');

    };

    return result;

}

const elementSrtRandomReplace = (element) => {
    element.textContent = strRandomReplace(element.textContent);
}

const elementSrtRandomReplaceLoopIn = (element) => {

    isHovering = true;

    intervalId = setInterval(() => {
        if (isHovering) {
            elementSrtRandomReplace(element);
        }
    }, 100);

    console.log('span is active');
}

export { strRandomReplace, elementSrtRandomReplace, elementSrtRandomReplaceLoopIn };