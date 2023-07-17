import { component$ } from '@builder.io/qwik';
import { QFlowbite } from '~/components/QFlowbite';

export default component$(() => {
  return (
    <>
      <div class="rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300 w-32 text-center">
        Red Button
      </div>
      <QFlowbite></QFlowbite>
    </>
  );
});
