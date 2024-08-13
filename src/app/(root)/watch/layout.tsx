import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>bu yerga nima narsa yozsak watch stranitsada va watch papka ichida qaysi papka page.tsx yozgan bolsa osha url stranitsa ichida qoladi</p>
        <ul>
            <li>
                <Link href={"/watch/:id"}>watch id link</Link>
            </li>
        </ul>
      <div>{children}</div>
    </div>
  );
}
