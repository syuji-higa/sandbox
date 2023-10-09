export const vertexShaderScript = `#version 300 es
precision highp float;

#define TAU 6.28318530718

uniform float sampleRate;

out float sound;

void main(void){
  float frame = float(gl_VertexID); // 頂点データのインデックスをフレーム数として使う。
  float time = frame / sampleRate; // 経過した秒数。
  float baseRate = TAU * time; // 周波数を 1Hz としたときの進行度（ラジアン）。

  float volume = 0.5;
  float hz = 440.0;

  sound = sin(baseRate * hz) * volume;
}
`;
