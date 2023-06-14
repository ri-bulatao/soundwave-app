export type Template = {
    id: number,
    image: string,
    title: {
        text: string,
        fontSize: string,
        fontFamily: string,
        fontWeight: string,
        fontColor: string,
    },
    subTitle: {
        text: string,
        fontSize: string,
        fontFamily: string,
        fontWeight: string,
        fontColor: string,
    },
    colors: Array<any>,
}