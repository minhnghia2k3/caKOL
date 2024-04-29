export interface ListData<T> {
    info: {
        unit: number;
        currentPage: number;
        totalPage: number;
    };
    data: T[];
}
