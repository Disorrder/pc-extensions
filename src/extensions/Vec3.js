pc.Vec3.prototype.copyFromObject = function(obj) {
    this.set(obj.x, obj.y, obj.z);
    return this;
};

pc.Vec3.prototype.randomize = function(spread = 1) {
    spread /= 2;
    this.x = pc.math.random(-spread, spread);
    this.y = pc.math.random(-spread, spread);
    this.z = pc.math.random(-spread, spread);
    return this;
};

// --- transformations ---
pc.Vec3.prototype.toObject = function() {
    return {x: this.x, y: this.y, z: this.z};
};

// --- static ---
pc.Vec3.isVec3 = function(v) {
    return v.x != null && v.y != null && v.z != null;
};

pc.Vec3.getCenter = function(a, b) {
    var c = a.clone();
    c.x += (b.x - a.x) / 2;
    c.y += (b.y - a.y) / 2;
    c.z += (b.z - a.z) / 2;
    return c;
};
