// Measurement values are in SI units; EG: kg, meters, and seconds

var accelerometer_update_frequency = 10,
    drone_depth = 0.025,
    drone_height = 0.015,
    drone_width = 0.02,
    motor_diameter = 0.0075,
    starting_height = 1,
    drone_body_weight = 0.2,
    drone_motor_weight = 0.1,
    gravity_strength = 9.8,
    camera_distance = 1.25,
    light_distance = camera_distance * 2,
    motor_strength = gravity_strength * 2,
    floor_size = 10;

document.addEventListener( // For development purposes only
    'keydown',
    function(event) {
        switch (event.keyCode) {
            case 38:
                motor_impulse(1, 1);
                motor_impulse(2, 1);
                motor_impulse(3, 1);
                motor_impulse(4, 1);
        }
    }
);

setInterval(function() {
    // console.log(get_tilt());

    hover();

    // DO STUFF HERE
}, accelerometer_update_frequency);

var hover = function() {
    var hover_force = gravity_strength / 9;

    motor_impulse(1, hover_force);
    motor_impulse(2, hover_force);
    motor_impulse(3, hover_force);
    motor_impulse(4, hover_force);
};