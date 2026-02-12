import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { tursoClient } from "~/utils/turso";

export const useDbTest = routeLoader$(async (requestEvent) => {
    const client = tursoClient(requestEvent);
    try {
        const rs = await client.execute("SELECT 1 as val");
        return {
            success: true,
            data: rs.rows,
            message: "Connection successful!",
        };
    } catch (e: any) {
        console.error(e);
        return {
            success: false,
            message: e.message,
        };
    }
});

export default component$(() => {
    const dbTest = useDbTest();

    return (
        <div class="p-10">
            <h1 class="text-2xl font-bold mb-4">Turso Connection Test</h1>
            {dbTest.value.success ? (
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                    <strong class="font-bold">Success!</strong>
                    <span class="block sm:inline"> {dbTest.value.message}</span>
                    <pre class="mt-2 bg-gray-100 p-2 rounded">
                        {JSON.stringify(dbTest.value.data, null, 2)}
                    </pre>
                </div>
            ) : (
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    <strong class="font-bold">Error!</strong>
                    <span class="block sm:inline"> {dbTest.value.message}</span>
                </div>
            )}
        </div>
    );
});
