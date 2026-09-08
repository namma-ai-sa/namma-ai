#!/usr/bin/env bash

echo "========== PremiumCard =========="
grep -R "PremiumCard" app \
--include="*.jsx" \
--include="*.tsx" 2>/dev/null | wc -l

echo

echo "========== PremiumButton =========="
grep -R "PremiumButton" app \
--include="*.jsx" \
--include="*.tsx" 2>/dev/null | wc -l

echo

echo "========== Inline Premium Cards =========="
grep -R 'background: "#111827"' app \
--include="*.jsx" \
--include="*.tsx" \
-n | grep -v PremiumCard.jsx | wc -l

echo

echo "========== Top Offenders =========="
grep -R 'background: "#111827"' app \
--include="*.jsx" \
--include="*.tsx" \
-n \
| cut -d: -f1 \
| sort \
| uniq -c \
| sort -nr
