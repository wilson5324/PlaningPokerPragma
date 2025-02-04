import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyDataService {
  private nameLobby = "";
  private namePlayer = new BehaviorSubject<string>('Unknown');
  private isAdmin = false;
  private isSpectator = false;

  constructor() { }

  setNameLobby(nameLobby: string): void {
    this.nameLobby = nameLobby;
  }

  setNamePlayer(name: string): void {
    this.namePlayer.next(name);
  }

  setIsAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  setIsSpectator(isSpectator: boolean): void {
    this.isSpectator = isSpectator;
  }

  getNameLobby(): string {
    return this.nameLobby;
  }

  getNamePlayer(): Observable<string> {
    return this.namePlayer.asObservable();
  }


  getIsAdmin(): boolean {
    return this.isAdmin;
  }
  getIsSpectator(): boolean {
    return this.isSpectator;
  }
}
