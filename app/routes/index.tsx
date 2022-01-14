import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import {useState}from 'react'

type IndexData = {
  paths: Array<{ name: string; to: string }>;
};


// https://remix.run/guides/routing#index-routes
export default function Index() {

  return (
    <div className="remix__page">
      <aside>
        <Link to="root">root</Link>
      </aside>
    </div>
  );
}
