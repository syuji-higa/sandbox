export const vertexShaderScript = `#version 300 es
precision highp float;
out float sound;

void main(void){
  float frame = float(gl_VertexID);
  float volume = 0.1;
  float hz = 440.0;
  sound = sin(hz + frame) * volume;
}
`;
