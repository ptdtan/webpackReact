import ReactDOM from 'react-dom';
import '@elastic/eui/dist/eui_theme_amsterdam_dark.css';
import React from 'react';

import { EuiProgress } from '@elastic/eui';

const Demo = () => (
	  <div>
	    <EuiProgress size="xs" color="accent" />
	  </div>
);

ReactDOM.render(
	    <Demo />,
	    document.getElementById('root')
	  );
      
