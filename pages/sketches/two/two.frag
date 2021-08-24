precision highp float;
varying vec2 vUv;

vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);

void main(){
    float pct = 0.0;

    vec3 color = vec3(pct);

    gl_FragColor = vec4(colorB, 1.0 );
}


