export class Moonphase {
   
    Error: number = 0;
    ErrorMsg: string = '';
    TargetDate: string = '';
    Moon: string[] = [];
    Index: number = 0;
    Age: number = 0.0;
    Phase: string = '';
    Distance: number = 0.0;
    Illumination: number = 0.0;
    AngularDiameter: number = 0.0;
    DistanceToSun: number = 0.0;
    SunAngularDiameter: number = 0.0;   

    constructor(Error: number, ErrorMsg: string, TargetDate: string, Moon: string[], Index: number, Age: number, Phase: string, Distance: number, Illumination: number, AngularDiameter: number, DistanceToSun: number, SunAngularDiameter: number) {
        this.Error = Error;
        this.ErrorMsg = ErrorMsg;
        this.TargetDate = TargetDate;
        this.Moon = Moon;
        this.Index = Index;
        this.Age = Age;
        this.Phase = Phase;
        this.Distance = Distance;
        this.Illumination = Illumination;
        this.AngularDiameter = AngularDiameter;
        this.DistanceToSun = DistanceToSun;
        this.SunAngularDiameter = SunAngularDiameter;   
    }


}
