// @flow

import React from 'react';

import { type UnitElement } from './unit';

export type MixedType = string | number | UnitElement;

export type RenderFunc = () => React.Element<*>;
