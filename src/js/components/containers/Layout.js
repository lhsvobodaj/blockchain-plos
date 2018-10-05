/**
 * Copyright (2018) Luiz Hermes Svoboda Junior
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

// import Title from 'grommet/components/Title';
// import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import { Component } from 'react';

import { NavSidebar } from '../ui/NavSidebar';
// import NotImplemented from '../ui/NotImplemented';

export default class Layout extends Component {
  render() {
    return (
      <Split priority='left' flex='right'>
        <NavSidebar />
        {this.props.children}
      </Split>
    );
  }
}
