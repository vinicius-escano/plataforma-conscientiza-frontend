export class DataOriginSource {
    type: string;
    value: number;

    constructor(type: string, value: number) {
        this.type = type;
        this.value = value;
    }
}

export class DataAge {
    interval: string;
    value: number;

    constructor(interval: string, value: number) {
        this.interval = interval;
        this.value = value;
    }
}

export class DataDTO {
    dataOriginSource: DataOriginSource[];
    dataAge: DataAge[];

    constructor(dataOriginSource: DataOriginSource[], dataAge: DataAge[]) {
        this.dataOriginSource = dataOriginSource;
        this.dataAge = dataAge;
    }
}


