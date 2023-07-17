/** @jsxImportSource react */
'use client';

import { qwikify$ } from '@builder.io/qwik-react';
import { Dropdown } from 'flowbite-react';

const QFlowbite = qwikify$(
  () => {
    return (
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    );
  },
  { eagerness: 'visible' }
);

export { QFlowbite };
