import { Injectable, EventEmitter } from '@angular/core';
import { RouteNavigator } from './modules/shared/models/RouteNavigator';
@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  public routesEmitter:EventEmitter<Array<RouteNavigator>> = new EventEmitter<Array<RouteNavigator>>()
  constructor() { 
  }
  changeRoutes(routeLinks:Array<RouteNavigator>):void{
    this.routesEmitter.emit(routeLinks);
  }
}
