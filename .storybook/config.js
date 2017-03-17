import { configure } from '@kadira/storybook';

// check https://getstorybook.io/docs

// Addons
// https://github.com/philcockfield/storybook-host
// https://github.com/storybooks/storybook-addon-notes
// https://github.com/storybooks/react-storybook-addon-info
// https://github.com/yangshun/react-storybook-addon-chapters
// https://github.com/tuchk4/storybook-readme

function loadStories() {
  require('../src/components');

  // add more here
}

configure(loadStories, module);
