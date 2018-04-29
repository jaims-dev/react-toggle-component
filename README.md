# react-toggle-component
This is a simple toggle-component that requires no installation (npm or yarn).
It also sports no configuration or any sophisticated stuff. 
It just takes two props:
 - toggledOn, toggledOn={true}, toggledOn={false}
 - onToggle={this.onToggle} (or a callback as needed)
 
## Usage:
Download the toggle.js and toggle.css files to a subdirectory of your choice in your project, i.e. 'toggle'.
Import it where you intend to use the Toggle component and render it.

```
import Toggle from './toggle/toggle'
...
<Toggle toggledOn={this.state.textEnabled} onToggle={this.onToggle} />
```

## Configuration
There are other toggle React components available that have tons of configuration stuff.
In needed a toggle component easy to use, and that in case of having to configure it I can go straight to the (css most of times) code and make the changes directly.

The html component was originally taken from w3c Schools https://www.w3schools.com/howto/howto_css_switch.asp 
