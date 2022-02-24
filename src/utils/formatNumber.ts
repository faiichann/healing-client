const formatNumber = (response : number) => {
    let formatNum = response.toString();
    while (formatNum.length < 3) formatNum = "0" + formatNum;
    return formatNum
}

export default formatNumber