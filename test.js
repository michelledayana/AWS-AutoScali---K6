import http from 'k6/http';
import { sleep } from 'k6';

// Load test configuration
export const options = {
  stages: [
    { duration: '10s', target: 20 },     // Smooth ramp-up
    { duration: '20s', target: 50 },     // Stable load
    { duration: '20s', target: 200 },    // High load
    { duration: '20s', target: 20000 },  // Stress/attack load
    { duration: '10s', target: 0 },      // Ramp-down
  ],
};

// Test scenario
export default function () {
  http.get('http://practicaenclase2-2100199937.us-east-1.elb.amazonaws.com/');
  sleep(1);
}
