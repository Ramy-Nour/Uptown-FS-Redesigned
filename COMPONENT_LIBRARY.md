# Uptown Financial System - Component Library

## Design System Overview

The Uptown Financial System uses a **Corporate Premium Design System** built on modern web standards with React, Tailwind CSS, and shadcn/ui components.

### Color Palette

**Primary Colors**
- Amber: `#A97E34` - Primary brand color for actions and highlights
- Navy: `#1a2332` - Dark text and backgrounds for contrast
- Gold: `#D4A574` - Premium accent color

**Semantic Colors**
- Success/Approved: `#10b981` (Emerald)
- Warning/Pending: `#f59e0b` (Amber)
- Error/Rejected: `#dc2626` (Red)
- Info: `#3b82f6` (Blue)

**Neutral Palette**
- Background: `#ffffff` (White)
- Surface: `#f8fafc` (Slate-50)
- Border: `#e2e8f0` (Slate-200)
- Text: `#1e293b` (Slate-900)
- Muted: `#64748b` (Slate-500)

---

## Core Components

### 1. Header Component

**Purpose**: Main navigation header with branding and user controls

**Features**:
- Gradient background (Amber to Amber-700)
- Responsive hamburger menu
- Notification bell with badge
- User profile and logout buttons
- Sticky positioning

**Usage**:
```tsx
<header className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-xl">
  {/* Header content */}
</header>
```

**Styling Classes**:
- `bg-gradient-to-r from-amber-600 to-amber-700` - Gradient background
- `shadow-xl` - Premium shadow
- `sticky top-0 z-50` - Positioning

---

### 2. Sidebar Navigation

**Purpose**: Collapsible left sidebar for main navigation

**Features**:
- Smooth collapse/expand animation
- Active state highlighting with gradient
- Badge support for notifications
- Help section at bottom
- Responsive on mobile

**Usage**:
```tsx
<aside className="w-72 bg-white border-r-2 border-slate-200 shadow-lg">
  {/* Navigation items */}
</aside>
```

**Active State**:
```tsx
className={`
  px-4 py-3 rounded-lg transition-all duration-200
  ${isActive 
    ? "bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-l-4 border-amber-600 shadow-md"
    : "text-slate-700 hover:bg-slate-100"
  }`}
```

---

### 3. KPI Card

**Purpose**: Display key performance indicators with trend information

**Features**:
- Icon with gradient background
- Trend indicator (up/down arrow)
- Large value display
- Subtle hover effects
- Responsive grid layout

**Usage**:
```tsx
<div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
  <div className="flex items-start justify-between mb-4">
    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center">
      <Icon className="text-amber-600" size={24} />
    </div>
    <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
      <ArrowUpRight size={16} />
      +2.45%
    </div>
  </div>
  <p className="text-slate-600 text-sm font-medium mb-2">Total Portfolio</p>
  <p className="text-3xl font-bold text-slate-900">$2,850,750</p>
</div>
```

**Grid Layout**:
- 1 column on mobile
- 2 columns on tablet
- 4 columns on desktop

---

### 4. Data Table

**Purpose**: Display structured data with sorting and actions

**Features**:
- Striped rows with hover states
- Header with background color
- Status badges in rows
- Action buttons
- Responsive overflow

**Usage**:
```tsx
<table className="w-full">
  <thead className="bg-slate-50 border-b-2 border-slate-200">
    <tr>
      <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700">
        Column Header
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-slate-100 hover:bg-amber-50 transition-colors duration-200">
      <td className="px-8 py-4">Cell content</td>
    </tr>
  </tbody>
</table>
```

---

### 5. Status Badge

**Purpose**: Display status with color coding

**Features**:
- Color-coded backgrounds
- Rounded pill shape
- Semantic color system
- Consistent sizing

**Status Types**:
```tsx
// Approved - Emerald
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
  Approved
</span>

// Pending - Amber
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
  Pending
</span>

// Review - Blue
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  In Review
</span>

// Rejected - Red
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
  Rejected
</span>
```

---

### 6. Button Variants

**Purpose**: Call-to-action and interaction elements

**Primary Button**:
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 active:scale-95">
  Primary Action
</button>
```

**Secondary Button**:
```tsx
<button className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg border-2 border-slate-200 hover:bg-slate-200 transition-all duration-200">
  Secondary
</button>
```

**Ghost Button**:
```tsx
<button className="px-6 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-200">
  Tertiary
</button>
```

---

### 7. Card Component

**Purpose**: Container for grouped content

**Features**:
- White background with subtle border
- Rounded corners
- Shadow effects
- Hover elevation

**Usage**:
```tsx
<div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
  {/* Card content */}
</div>
```

---

### 8. Section Header

**Purpose**: Introduce major content sections

**Features**:
- Large bold title
- Descriptive subtitle
- Bottom border accent
- Consistent spacing

**Usage**:
```tsx
<div className="mb-8 pb-6 border-b-2 border-amber-200">
  <h2 className="text-3xl font-bold text-slate-900 mb-2">Section Title</h2>
  <p className="text-slate-600">Descriptive subtitle</p>
</div>
```

---

## Typography System

**Font Stack**: 
- Display: Poppins Bold (32px)
- Heading: Poppins SemiBold (24px)
- Body: Inter Regular (14px)
- Label: Inter Medium (12px)
- Monospace: JetBrains Mono (13px)

**Text Hierarchy**:
```tsx
// Page Title
<h1 className="text-4xl font-bold text-slate-900">Main Title</h1>

// Section Header
<h2 className="text-2xl font-bold text-slate-900">Section Title</h2>

// Subsection
<h3 className="text-xl font-bold text-slate-900">Subsection</h3>

// Body Text
<p className="text-slate-600">Regular paragraph text</p>

// Small Text
<p className="text-sm text-slate-500">Small or secondary text</p>
```

---

## Spacing System

**Grid**: 4px base unit

**Common Sizes**:
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px
- `gap-4` = 16px gap
- `gap-6` = 24px gap
- `gap-8` = 32px gap

---

## Animation & Transitions

**Hover Effects**:
```tsx
transition-all duration-200
hover:shadow-xl
hover:from-amber-700
```

**Active States**:
```tsx
active:scale-95
```

**Smooth Transitions**:
```tsx
transition-colors duration-200
transition-all duration-300
```

---

## Responsive Breakpoints

- Mobile: Default (< 640px)
- Tablet: `md:` (640px - 1024px)
- Desktop: `lg:` (1024px+)

**Grid Examples**:
```tsx
// Single column on mobile, 2 on tablet, 4 on desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

// Full width on mobile, 2/3 on desktop
className="w-full lg:w-2/3"
```

---

## Best Practices

### Color Usage
1. Use amber (#A97E34) for primary actions and highlights
2. Use semantic colors for status (green=success, red=error, amber=warning)
3. Maintain sufficient contrast for accessibility
4. Use gradients sparingly for premium feel

### Spacing
1. Use consistent 4px grid for all spacing
2. Maintain breathing room around content
3. Use larger gaps between major sections
4. Reduce spacing on mobile devices

### Typography
1. Use bold weights for emphasis
2. Maintain clear hierarchy with size and weight
3. Keep line-height at 1.5 for readability
4. Use monospace for data and codes

### Interactions
1. Provide visual feedback on hover/active states
2. Use smooth transitions (200-300ms)
3. Scale buttons on click for tactile feedback
4. Show loading states with animations

### Accessibility
1. Ensure color contrast ratio ≥ 4.5:1
2. Use semantic HTML elements
3. Provide keyboard navigation
4. Include ARIA labels where needed

---

## Component Variants

All components should support:
- **Size variants**: Small, Medium, Large
- **State variants**: Default, Hover, Active, Disabled
- **Color variants**: Primary, Secondary, Danger
- **Responsive variants**: Mobile, Tablet, Desktop

---

## Implementation Guide

1. **Import shadcn/ui components** from `@/components/ui/*`
2. **Extend with Tailwind classes** for custom styling
3. **Use CSS variables** for consistent theming
4. **Follow naming conventions** for component files
5. **Document component props** with JSDoc comments
6. **Test responsive design** on all breakpoints
7. **Verify accessibility** with keyboard navigation

---

## Future Enhancements

- Dark mode support
- Animation library integration
- Advanced form components
- Data visualization charts
- Real-time notification system
- Mobile app optimization
- Internationalization (i18n)
- Performance optimization
