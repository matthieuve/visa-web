import {MouseState} from '../services/virtual-desktop-adapters';

export class Touchscreen {

    private readonly _currentState: MouseState;
    private readonly _element: HTMLElement;

    public onmousedown: (state: MouseState) => void = null;
    public onmouseup: (state: MouseState) => void = null;
    public onmousemove: (state: MouseState) => void = null;

    constructor(element: HTMLElement) {
        this._element = element;
        this._currentState =  new MouseState(
            0, 0,
            false, false, false, false, false
        );
    }

    private isTouchEvent = (event): boolean => event.pointerType === 'touch';

    public handlePanEnd(event): void {
        if (this.isTouchEvent(event)) {
            this.release('left');
        }
    }

    private move(x, y): void {
        this._currentState.fromClientPosition(this._element, x, y);
        if (this.onmousemove) {
            this.onmousemove(this._currentState);
        }
    }

    private click(button: string): void {
        this.press(button);
        this.release(button);
    }

    private press(button: string): void {
        if (!this._currentState[button]) {
            this._currentState[button] = true;
            if (this.onmousedown) {
                this.onmousedown(this._currentState);
            }
        }
    }

    private release(button: string): void {
        if (this._currentState[button]) {
            this._currentState[button] = false;
            if (this.onmouseup) {
                this.onmouseup(this._currentState);
            }
        }
    }

    public handlePan(event): void {
        if (this.isTouchEvent(event)) {
            const {x, y} = event.srcEvent;
            this.press('left');
            this.move(x, y);
        }
    }

    public handleTap(event): void {
        if (this.isTouchEvent(event)) {
            const {x, y} = event.srcEvent;
            this.move(x, y);
            this.click('left');
        }
    }

    public handlePress(event): void {
        if (this.isTouchEvent(event)) {
            const {x, y} = event.srcEvent;
            this.move(x, y);
            this.click('right');
        }
    }

}
