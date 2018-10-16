export default class Polar3 {
    constructor(r = 0, theta = 0, phi = 0) {
        this.r = r;
        this.theta = theta;
        this.phi = phi;
    }

    get lon() { return this.theta; }
    set lon(v) { this.theta = v; }

    get lat() { return this.phi; }
    set lat(v) { this.phi = v; }

    toVec3() {
        return new pc.Vec3().setFromPolar(this);
    }
    // getCartesian() { return this.toVec3(); } //?

    toString() {
        return `[${this.r}, ${this.theta}, ${this.phi}]`;
    }
}

// --- Vec3 extensions ---
pc.Vec3.prototype.getPolar = function() {
    return new Polar3(
        this.length(),
        Math.asin(this.z / this.length()) * pc.math.RAD_TO_DEG,
        Math.atan2(this.y, this.x) * pc.math.RAD_TO_DEG
    );
};

pc.Vec3.prototype.setFromPolar = function(r, theta, phi) {
    if (typeof r === 'object') {
        theta = r.theta * pc.math.DEG_TO_RAD;
        phi = r.phi * pc.math.DEG_TO_RAD;
        r = r.r;
    }

    this.x = r * Math.cos(phi) * Math.cos(theta);
    this.y = r * Math.sin(phi);
    this.z = r * Math.cos(phi) * Math.sin(theta);
    return this;
};
