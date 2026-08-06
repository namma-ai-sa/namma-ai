import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        background: "#0b0f19",
        position: "sticky",
        top: 0,
      }}
    >
      /
        🚀 NAMMA AI
      </Link>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        /tools
          الأدوات
        </Link>

        /projects
          المشاريع
        </Link>

        /pricing
          الأسعار
        </Link>

        /about
          عن المنصة
        </Link>

        /contact
          تواصل معنا
        </Link>
      </div>
    </nav>
  );
}