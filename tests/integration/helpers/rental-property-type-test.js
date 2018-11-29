import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | rentals-property-type', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders correctly for a Standalone rental', async function(assert) {
    this.set('inputValue', 'Estate');
    await render(hbs`{{rentals-property-type inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'Standalone');
  });

  test('it renders correctly for a Community rental', async function(assert) {
    this.set('inputValue', 'Apartament');
    await render(hbs`{{rental-property-type inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'Community');


  });
});