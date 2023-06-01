import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataViewObjects = powerbi.DataViewObjects;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private rootElement;
    private dataView;
    private hostService;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration;
    getValue<T>(objects: DataViewObjects, objectName: string, propertyName: string, defaultValue: T): T;
}
