import { mjdToUTCString } from '../../src/utility/time';

export const Layout = {
  name: 'artemis',
  icon: 'radar-chart',
  defaultLayout: {
    lg: [
      {
        i: 'satellite-simple-hiapo-a',
        x: 0,
        y: 0,
        w: 3,
        h: 7,
        component: {
          name: 'AgentList',
        },
      },
      {
        i: 'satellite-simple-hiapo-ba',
        x: 3,
        y: 0,
        w: 3,
        h: 7,
        component: {
          name: 'DisplayValue',
          props: {
            name: 'IMU',
            displayValues: [
              {
                name: 'Acceleration X',
                nodeProcess: 'external_node:external_agent',
                dataKey: 'acceleration',
                processDataKey: (x) => x.X,
                timeDataKey: 'node_utc',
                unit: ' m/s^2',
              },
              {
                name: 'Acceleration Y',
                nodeProcess: 'external_node:external_agent',
                dataKey: 'acceleration',
                processDataKey: (y) => y.Y,
                timeDataKey: 'node_utc',
                unit: ' m/s^2',
              },
              {
                name: 'Acceleration Z',
                nodeProcess: 'external_node:external_agent',
                dataKey: 'acceleration',
                processDataKey: (z) => z.Z,
                timeDataKey: 'node_utc',
                unit: ' m/s^2',
              },
              {
                name: 'Gyroscope X',
                nodeProcess: 'external_node:external_agent',
                dataKey: 'gyro',
                processDataKey: (x) => x.X,
                timeDataKey: 'node_utc',
                unit: ' radians/s'
              },
              {
                name: 'Gyroscope Y',
                nodeProcess: 'external_node:external_agent',
                dataKey: 'gyro',
                processDataKey: (y) => y.Y,
                timeDataKey: 'node_utc',
                unit: ' radians/s'
              },
              {
                name: 'Gyroscope Z',
                nodeProcess: 'external_node:external_agent',
                dataKey: 'gyro',
                processDataKey: (z) => z.Z,
                timeDataKey: 'node_utc',
                unit: ' radians/s',
        /* component: {
          name: 'DisplayValue',
          props: {
            name: 'Propagator',
            displayValues: [
              {
                name: 'ECI Position X',
                nodeProcess: 'cubesat1:propagator_simple',
                dataKey: 'node_loc_pos_eci',
                processDataKey: (x) => x.pos[0].toFixed(3) *1e-3,
                timeDataKey: 'node_loc_utc',
                unit: 'km',
              },
              {
                name: 'ECI Position Y',
                nodeProcess: 'cubesat1:propagator_simple',
                dataKey: 'node_loc_pos_eci',
                processDataKey: (x) => x.pos[1].toFixed(3)*1e-3,
                timeDataKey: 'node_loc_utc',
                unit: 'km',
              },
              {
                name: 'ECI Position Z',
                nodeProcess: 'cubesat1:propagator_simple',
                dataKey: 'node_loc_pos_eci',
                processDataKey: (x) => x.pos[2].toFixed(3)*1e-3,
                timeDataKey: 'node_loc_utc',
                unit: 'km',
              },
              {
                name: 'ECI Velocity X',
                nodeProcess: 'cubesat1:propagator_simple',
                dataKey: 'node_loc_pos_eci',
                processDataKey: (x) => x.vel[0].toFixed(3) *1e-3,
                timeDataKey: 'node_loc_utc',
                unit: 'km/s',
              },
              {
                name: 'ECI Velocity Y',
                nodeProcess: 'cubesat1:propagator_simple',
                dataKey: 'node_loc_pos_eci',
                processDataKey: (x) => x.vel[1].toFixed(3)*1e-3,
                timeDataKey: 'node_loc_utc',
                unit: 'km/s',
              },
              {
                name: 'ECI Velocity Z',
                nodeProcess: 'cubesat1:propagator_simple',
                dataKey: 'node_loc_pos_eci',
                processDataKey: (x) => x.vel[2].toFixed(3)*1e-3,
                timeDataKey: 'node_loc_utc',
                unit: 'km/s',
              },{
                name: 'test',
                nodeProcess: 'external_node:external_agent',
                dataKey: 'acceleration',
                processDataKey: (x) => x.X,
                timeDataKey: 'node_utc' */
              },
            ],
          },
        },
      },
      {
        i: 'satellite-simple-hiapo-b',
        x: 6,
        y: 0,
        w: 3,
        h: 7,
        component: {
          name: 'DisplayValue',
          props: {
            name: 'CPU',
            displayValues: [
              {
                name: 'CPU Load',
                nodeProcess: 'cubesat1:cpu',
                dataKey: 'device_cpu_load_000',
                unit: '',
                processDataKey: (x) => x.toFixed(2),
              },
              {
                name: 'CPU Utilization',
                nodeProcess: 'cubesat1:cpu',
                dataKey: 'cpu_utilization_000',
                unit: '',
                processDataKey: (x) => x.toFixed(2),
              },
              {
                name: 'Max GiB',
                nodeProcess: 'cubesat1:cpu',
                dataKey: 'device_cpu_maxgib_000',
                unit: 'GiB',
                processDataKey: (x) => x.toFixed(2),
              },
              {
                name: 'GiB',
                nodeProcess: 'cubesat1:cpu',
                dataKey: 'device_cpu_gib_000',
                unit: 'GiB',
                processDataKey: (x) => x.toFixed(2),
              },
            ],
          },
        },
      },
      {
        i: 'satellite-simple-hiapo-e',
        x: 0,
        y: 8,
        w: 6,
        h: 21,
        component: {
          name: 'Globe',
          props: {
            name: 'Orbit',
            orbits: [
              {
                name: 'cubesat1',
                modelFileName: 'cubesat1.glb',
                nodeProcess: 'cubesat1:propagator_simple',
                XDataKey: 'node_loc_pos_eci.pos[0]',
                YDataKey: 'node_loc_pos_eci.pos[1]',
                ZDataKey: 'node_loc_pos_eci.pos[2]',
                live: true,
                position: [21.289373, 157.917480, 350000.0],
                orientation: {
                  d: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  w: 0,
                },
              },
            ],
          },
        },
      },
      {
        i: 'satellite-simple-hiapo-f',
        x: 6,
        y: 8,
        w: 6,
        h: 21,
        component: {
          name: 'Attitude',
          props: {
            name: 'Attitude',
            attitudes: [
              {
                name: 'propagator',
                nodeProcess: 'cubesat1:propagator_simple',
                dataKey: 'node_loc_att_icrf',
                quaternions: {
                  d: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                  w: 0,
                },
                live: true,
              },
            ],
          },
        },
      },
      {
        i: 'satellite-simple-hiapo-g',
        x: 0,
        y: 3,
        w: 6,
        h: 18,
        component: {
          name: 'Chart',
          props: {
            name: 'CPU',
            XDataKey: 'node_utc',
            processXDataKey: (x) => mjdToUTCString(x),
            plots: [
              {
                x: [],
                y: [],
                type: 'scatter',
                marker: {
                  color: 'red',
                },
                name: 'Load',
                YDataKey: 'device_cpu_load_000',
                processYDataKey: (x) => x,
                nodeProcess: 'cubesat1:cpu',
                live: true,
              },
              {
                x: [],
                y: [],
                type: 'scatter',
                marker: {
                  color: 'blue',
                },
                name: 'Utilization',
                YDataKey: 'cpu_utilization_000',
                processYDataKey: (x) => x,
                nodeProcess: 'cubesat1:cpu',
                live: true,
              },
            ],
          },
        },
      },
    ],
  },
};

export const NodeList = ['cubesat1', 'external_node'];
