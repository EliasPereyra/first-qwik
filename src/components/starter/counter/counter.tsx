import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const count = useSignal(0);

  return (
    <div>
      <button onClick$={() => count.value++}>Increment</button>
      <p>{count.value}</p>
    </div>
  );
});
