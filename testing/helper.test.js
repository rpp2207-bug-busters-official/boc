import { render, screen, fireEvent, cleanup, renderHook, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import '@testing-library/jest-dom';
import {Modal, Button, Form} from 'react-bootstrap';
import GetConnectionsFilters from '../../../helper_functions/getConnectionsFilters.js';
import GetOperatorsFilters from '../../../helper_functions/getOperatorsFilters.js';
import JsonEscape from '../../../helper_functions/jsonEscape.js';
import ChargerMap from './ChargerMap.js';
// import fetch from 'node-fetch';
// import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';



global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({  }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

afterEach(() => {
  cleanup();

  // jest.mock('axios');


});


describe('get filters for connections', () => {
 it('convert into filters', () => {
   let testData= {operators:['Tesla','ChargePoint'], connections:['CSS']};
   let connectionFilters = GetConnectionsFilters(testData);
   let result=[['in', 'CSS', ['string', ['get', 'connectionType']]]];
   expect(connectionFilters).toEqual(result);

 });
});

describe('get filters for operators', () => {
  it('convert into filters', () => {
    let testData= {operators:['Tesla','ChargePoint'], connections:['CSS']};
    let operatorFilters = GetOperatorsFilters(testData);
    let result=[['in', 'Tesla', ['string', ['get', 'poi']]],['in', 'ChargePoint', ['string', ['get', 'poi']]]];
    expect(operatorFilters).toEqual(result);

  });
 });

 describe('escape special characters', () => {
  it('convert into filters', () => {
    let testData= 'test \n test2 \r test3 \t';
    let escaped = JsonEscape(testData);
    let result='test \\\\n test2 \\\\r test3 \\\\t';
    expect(escaped).toEqual(result);

  });
 });


 describe('charger map component', () => {


  jest.mock("mapbox-gl", () => ({
    Map: jest.fn(),
    Popup: jest.fn(),
  }));

  // jest.mock("MapboxGeocoder", () => ({
  //   // Map: jest.fn(),
  //   // Popup: jest.fn(),
  // }));

  // mapbox-gl.Map = {
  //   on: jest.fn(),
  //   remove: jest.fn(),
  //   off: jest.fn(),
  //   getCanvas: jest.fn(),
  // };
  // mapbox-gl.Popup = {
  //   remove: jest.fn(),
  // };
  // mapboxgl.GeoCoder.prototype = {
  //   remove: jest.fn(),
  // };


  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   render(<ChargerMap />, div);
  // });
  // it('component rendered', () => {
  //   let screen = render(<ChargerMap />);
  //   let title = screen.getByText('Charge and Tarry');
  //   expect(title).toBeInTheDocument();

  // });
 });
